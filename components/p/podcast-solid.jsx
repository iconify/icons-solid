import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gofrvbhmp.css';
import '../../css/d/d9nzp3e2z.css';
import '../../css/z/zcsc2k1xt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gofrvbhmp"/><path class="d9nzp3e2z"/><path class="zcsc2k1xt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:podcast-solid"} {...others} />);
}

export default Component;
