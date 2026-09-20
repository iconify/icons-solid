import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hsdaybuea.css';
import '../../css/t/tx00macjw.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="hsdaybuea"/><path class="tx00macjw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:spell-check-16"} {...others} />);
}

export default Component;
