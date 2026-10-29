import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/idzbopd7s.css';
import '../../css/z/zl_qm-03y.css';
import '../../css/u/uip_2krru.css';
import '../../css/k/kk7607qcr.css';
import '../../css/e/edin6db6b.css';
import '../../css/f/f8a04jbdw.css';
import '../../css/u/uxc0po0gc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="idzbopd7s wm-shadow"/><path class="zl_qm-03y"/><path class="uip_2krru"/><path class="kk7607qcr"/><path class="edin6db6b"/><path class="f8a04jbdw wm-shine"/><path class="uxc0po0gc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:git-fork"} {...others} />);
}

export default Component;
