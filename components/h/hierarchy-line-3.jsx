import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lsi8h5j9i.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="lsi8h5j9i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:hierarchy-line-3"} {...others} />);
}

export default Component;
