import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v9dzyiszx.css';
import '../../css/d/d1u5dmb3x.css';
import '../../css/o/oduy0uyli.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="v9dzyiszx"/><path class="d1u5dmb3x"/><path class="oduy0uyli"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bolt-plus-20"} {...others} />);
}

export default Component;
