import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gwric7s3u.css';
import '../../css/c/cg9u3_5pf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gwric7s3u"/><path class="cg9u3_5pf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:amusement-park-ferris-wheel-bold"} {...others} />);
}

export default Component;
