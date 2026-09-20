import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tj6ubqbhj.css';
import '../../css/n/nfu1r0bhd.css';
import '../../css/c/czeiw6b4w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="tj6ubqbhj"/><rect class="nfu1r0bhd"/><path class="czeiw6b4w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:align-end-horizontal"} {...others} />);
}

export default Component;
