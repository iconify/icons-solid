import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a-sap6zpp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="a-sap6zpp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:bolt-bomb"} {...others} />);
}

export default Component;
