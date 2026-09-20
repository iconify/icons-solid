import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aksdzbb-y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="aksdzbb-y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:libreoffice-writer"} {...others} />);
}

export default Component;
