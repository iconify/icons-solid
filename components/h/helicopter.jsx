import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p7jr1pszw.css';
import '../../css/k/ko2c-ubym.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="p7jr1pszw"/><path class="ko2c-ubym"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:helicopter"} {...others} />);
}

export default Component;
