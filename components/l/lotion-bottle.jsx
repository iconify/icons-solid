import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jzz9yqv2o.css';
import '../../css/f/fnqg8wblb.css';
import '../../css/o/o2eagibnr.css';
import '../../css/t/t6_odzb_z.css';
import '../../css/l/lsutnug7y.css';
import '../../css/f/f_tuwnbyp.css';
import '../../css/y/yfco0lbcj.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="jzz9yqv2o"/><path class="fnqg8wblb"/><path class="o2eagibnr"/><ellipse class="t6_odzb_z"/><path class="lsutnug7y"/><path class="f_tuwnbyp"/><ellipse class="yfco0lbcj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:lotion-bottle"} {...others} />);
}

export default Component;
