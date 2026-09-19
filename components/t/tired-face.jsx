import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jnd9-ne4y.css';
import '../../css/k/k-pm8hbkw.css';
import '../../css/f/f038fm58r.css';
import '../../css/v/v4a-m_bgf.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="jnd9-ne4y"/><path clip-rule="evenodd" class="k-pm8hbkw"/><path class="f038fm58r"/><path clip-rule="evenodd" class="v4a-m_bgf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:tired-face"} {...others} />);
}

export default Component;
