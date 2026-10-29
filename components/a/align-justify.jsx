import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sh4rqfpek.css';
import '../../css/w/wx4dzibso.css';
import '../../css/k/kz669vh8u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sh4rqfpek"/><path class="wx4dzibso"/><path class="kz669vh8u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:align-justify"} {...others} />);
}

export default Component;
