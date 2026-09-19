import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b4kg3hb2u.css';
import '../../css/x/x_tu0ab7w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b4kg3hb2u"/><path class="x_tu0ab7w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eos-icons:content-lifecycle-management"} {...others} />);
}

export default Component;
