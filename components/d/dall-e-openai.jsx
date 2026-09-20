import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/jwgxi-b0m.css';
import '../../css/o/oetgeybih.css';
import '../../css/e/e7fn94kyy.css';
import '../../css/p/pw07jnici.css';
import '../../css/w/w0o3ber3e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="jwgxi-b0m"/><path class="oetgeybih"/><path class="e7fn94kyy"/><path class="pw07jnici"/><path class="w0o3ber3e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:dall-e-openai"} {...others} />);
}

export default Component;
