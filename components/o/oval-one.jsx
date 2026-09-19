import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ahrb5lbeq.css';

const viewBox = {"width":48,"height":48};
const content = `<ellipse class="ahrb5lbeq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:oval-one"} {...others} />);
}

export default Component;
