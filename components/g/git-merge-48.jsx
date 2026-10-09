import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kkzs98bzj.css';
import '../../css/a/ajl3hnenw.css';
import '../../css/f/fq_nbabag.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="kkzs98bzj"/><path class="ajl3hnenw"/><path class="fq_nbabag"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:git-merge-48"} {...others} />);
}

export default Component;
