import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mpnm9xbrr.css';
import '../../css/b/bq_ml1eor.css';
import '../../css/r/rchmwk9vz.css';
import '../../css/d/dvjtfrxjq.css';
import '../../css/x/xicf2qu9w.css';
import '../../css/m/mogj19s3i.css';
import '../../css/d/d5q0sgb3j.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="mpnm9xbrr"/><path class="bq_ml1eor"/><path class="rchmwk9vz"/><path class="dvjtfrxjq"/><path class="xicf2qu9w"/><path class="mogj19s3i"/><path class="d5q0sgb3j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconito:sugar"} {...others} />);
}

export default Component;
