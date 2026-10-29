import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sh4rqfpek.css';
import '../../css/t/ts-4hsfbk.css';
import '../../css/m/mjnimo6uf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sh4rqfpek"/><path class="ts-4hsfbk"/><path class="mjnimo6uf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:align-left"} {...others} />);
}

export default Component;
