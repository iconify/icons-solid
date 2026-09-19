import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u07f9fclq.css';
import '../../css/l/lt8bi7bax.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="u07f9fclq"/><circle class="lt8bi7bax"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"feather:toggle-right"} {...others} />);
}

export default Component;
