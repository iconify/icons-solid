import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t521r7bww.css';
import '../../css/j/jd8qxobse.css';
import '../../css/f/ftkgzh3ob.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t521r7bww"/><path class="jd8qxobse"/><path class="ftkgzh3ob"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:star-rings-outline"} {...others} />);
}

export default Component;
