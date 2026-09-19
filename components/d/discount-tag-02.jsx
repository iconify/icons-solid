import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/w/wav9d1b7u.css';
import '../../css/h/hubmzk9qp.css';
import '../../css/a/afwmemo5r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="wav9d1b7u"/><path class="hubmzk9qp"/><path class="afwmemo5r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:discount-tag-02"} {...others} />);
}

export default Component;
