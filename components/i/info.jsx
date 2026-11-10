import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qeot7jbji.css';
import '../../css/k/kiuf6hbjh.css';
import '../../css/h/hz9f2cc3u.css';
import '../../css/n/n5zmh5klb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="qeot7jbji"/><circle class="kiuf6hbjh"/><path class="hz9f2cc3u"/><path class="n5zmh5klb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:info"} {...others} />);
}

export default Component;
