import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sul3pg2pb.css';
import '../../css/x/x-sy1absj.css';
import '../../css/n/n8uzvhbvq.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="sul3pg2pb"/><path class="x-sy1absj"/><path class="n8uzvhbvq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:rss"} {...others} />);
}

export default Component;
