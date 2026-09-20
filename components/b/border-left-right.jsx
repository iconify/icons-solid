import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wyxi0acao.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="wyxi0acao"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:border-left-right"} {...others} />);
}

export default Component;
