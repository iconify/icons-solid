import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c91a7wbvv.css';
import '../../css/g/gkzjl6blp.css';
import '../../css/f/f6n2v62fq.css';
import '../../css/p/pnf7jkbma.css';
import '../../css/p/p_vzd4dfr.css';
import '../../css/l/lasma-wha.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="c91a7wbvv"/><path class="gkzjl6blp"/><path class="f6n2v62fq"/><path class="pnf7jkbma"/><path class="p_vzd4dfr"/><path class="lasma-wha"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:sonarr-anime-light"} {...others} />);
}

export default Component;
