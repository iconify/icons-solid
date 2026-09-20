import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qix4teb5l.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="qix4teb5l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:surface-top-filled"} {...others} />);
}

export default Component;
