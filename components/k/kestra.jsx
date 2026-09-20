import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fkye0vb5n.css';
import '../../css/h/h6a3gnxsv.css';
import '../../css/j/jni3evble.css';
import '../../css/u/uwdvvmbqe.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="fkye0vb5n"/><path class="h6a3gnxsv"/><path class="jni3evble"/><path class="uwdvvmbqe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:kestra"} {...others} />);
}

export default Component;
