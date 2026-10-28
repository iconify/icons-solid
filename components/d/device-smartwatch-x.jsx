import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/ffkfc4bxc.css';
import '../../css/u/ugkloo4ck.css';
import '../../css/b/btj6uo__h.css';
import '../../css/e/efc4gi5yn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect transform="rotate(-90 7.23 5.29)" class="ffkfc4bxc"/><rect transform="rotate(-90 7.23 22.2)" class="ugkloo4ck"/><rect transform="rotate(-90 4.83 18.71)" class="btj6uo__h"/><path class="efc4gi5yn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:device-smartwatch-x"} {...others} />);
}

export default Component;
