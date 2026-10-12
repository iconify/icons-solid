import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kw9a5abfk.css';
import '../../css/k/kqu7g8lpe.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="kw9a5abfk"/><path class="kqu7g8lpe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:phone-waves-fill-20"} {...others} />);
}

export default Component;
