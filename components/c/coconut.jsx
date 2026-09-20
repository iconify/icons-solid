import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jpjaveb6u.css';
import '../../css/y/ygxoufbre.css';
import '../../css/t/tokqz4v5i.css';
import '../../css/y/y84hmbckd.css';
import '../../css/h/hc70rlb5q.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/o/o8ief1bvc.css';
import '../../css/y/y8jy-c1lh.css';
import '../../css/p/pn4fp3bkj.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="jpjaveb6u"/><path class="ygxoufbre"/><path class="tokqz4v5i"/><path class="y84hmbckd"/><path class="hc70rlb5q"/><g class="ij2x_72vy"><path class="o8ief1bvc"/><path class="y8jy-c1lh"/><path class="pn4fp3bkj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:coconut"} {...others} />);
}

export default Component;
