import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ako88iouy.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="ako88iouy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-page-controller-fit-screen-fit-screen-adjust-display-artboard-frame-corner"} {...others} />);
}

export default Component;
