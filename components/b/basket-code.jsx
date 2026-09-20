import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/amw7zrb4t.css';
import '../../css/f/fe20_cbow.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="amw7zrb4t"/><path class="fe20_cbow"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:basket-code"} {...others} />);
}

export default Component;
