import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ievdxcc9u.css';
import '../../css/x/xcuj9xz1r.css';
import '../../css/c/cfvelzb1x.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ievdxcc9u"/><path class="xcuj9xz1r"/><path class="cfvelzb1x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:layers"} {...others} />);
}

export default Component;
