import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u3jzqgkfd.css';
import '../../css/a/ares4u2vu.css';
import '../../css/h/ht5kii6hd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="u3jzqgkfd"/><rect class="ares4u2vu"/><rect class="ht5kii6hd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:cpu"} {...others} />);
}

export default Component;
