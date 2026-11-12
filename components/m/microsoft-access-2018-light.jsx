import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jwc5rnbvb.css';
import '../../css/h/hp0eg7bwe.css';
import '../../css/i/i0fe7jb1f.css';
import '../../css/t/tlmciol3y.css';
import '../../css/p/plsr1krgd.css';

const viewBox = {"width":512,"height":512};
const content = `<ellipse class="jwc5rnbvb"/><path class="hp0eg7bwe"/><path class="i0fe7jb1f"/><path class="tlmciol3y"/><path class="plsr1krgd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:microsoft-access-2018-light"} {...others} />);
}

export default Component;
