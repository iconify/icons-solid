import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k-hg0bczz.css';
import '../../css/n/ncl94fqvy.css';
import '../../css/n/nndd3wbqy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k-hg0bczz wm-shadow"/><path class="ncl94fqvy wm-k"/><path class="nndd3wbqy wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:circle-dashed"} {...others} />);
}

export default Component;
