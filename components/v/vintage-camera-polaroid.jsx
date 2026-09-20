import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f9um0nbed.css';
import '../../css/y/ymv5f1b1u.css';
import '../../css/c/cihm6fs4y.css';
import '../../css/v/v64-wzbtw.css';
import '../../css/u/uoe-mx4gx.css';
import '../../css/i/i60cxpbqf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f9um0nbed"/><path class="ymv5f1b1u"/><path class="cihm6fs4y"/><path class="v64-wzbtw"/><path class="uoe-mx4gx"/><path class="i60cxpbqf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:vintage-camera-polaroid"} {...others} />);
}

export default Component;
