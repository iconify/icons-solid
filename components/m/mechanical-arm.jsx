import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fkn9vbcgi.css';
import '../../css/d/dw_zwc6tq.css';
import '../../css/k/kgb598b8c.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/i/iile3cbjj.css';
import '../../css/j/jb_krbbxs.css';
import '../../css/d/de5t2lbzo.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="fkn9vbcgi"/><path class="dw_zwc6tq"/><path class="kgb598b8c"/><g class="brzn_0bpr"><path class="iile3cbjj"/><path class="jb_krbbxs"/><path class="de5t2lbzo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:mechanical-arm"} {...others} />);
}

export default Component;
