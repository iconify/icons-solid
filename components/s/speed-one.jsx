import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/f/fr-05wjki.css';
import '../../css/a/a350jnbrs.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="fr-05wjki"/><path class="a350jnbrs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:speed-one"} {...others} />);
}

export default Component;
