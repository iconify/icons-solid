import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o7806flpi.css';
import '../../css/v/v9la5m20b.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="o7806flpi"/><path class="v9la5m20b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:next-filled"} {...others} />);
}

export default Component;
