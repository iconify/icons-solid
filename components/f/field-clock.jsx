import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/peklzwobw.css';
import '../../css/b/bs9mhcbzn.css';
import '../../css/c/cb9jhojxk.css';
import '../../css/o/oryjwu8rp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="peklzwobw"/><path class="bs9mhcbzn"/><circle class="cb9jhojxk"/><path class="oryjwu8rp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:field-clock"} {...others} />);
}

export default Component;
