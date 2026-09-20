import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0m25c.css';
import '../../css/m/m40z4o.css';
import '../../css/v/v7zwrw.css';
import '../../css/z/z5rc8u.css';
import '../../css/k/kf9r7q.css';
import '../../css/s/so-from-10.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a0m25c m40z4o"/><path class="a0m25c v7zwrw"/><path class="a0m25c z5rc8u"/><path class="a0m25c kf9r7q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:align-center"} {...others} />);
}

export default Component;
