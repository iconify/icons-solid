import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rrc4qfb2o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rrc4qfb2o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:opera-gx"} {...others} />);
}

export default Component;
