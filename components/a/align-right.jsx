import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sh4rqfpek.css';
import '../../css/r/rzrmuq82c.css';
import '../../css/c/c1uaxoita.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sh4rqfpek"/><path class="rzrmuq82c"/><path class="c1uaxoita"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:align-right"} {...others} />);
}

export default Component;
