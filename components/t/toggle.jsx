import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/atxbqjuzp.css';
import '../../css/l/lt8bi7bax.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="atxbqjuzp"/><circle class="lt8bi7bax"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"struq:toggle"} {...others} />);
}

export default Component;
