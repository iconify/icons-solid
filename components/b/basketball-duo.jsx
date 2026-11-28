import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ogahin_3h.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/z5s_iw4ay.css';
import '../../css/e/e33_rkbbn.css';
import '../../css/a/afv3k-bvd.css';
import '../../css/t/td5s74bhk.css';
import '../../css/g/glvsztbeh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ogahin_3h secondary"/><g class="dt0cm9dhy primary"><path class="z5s_iw4ay"/><path class="e33_rkbbn"/><path class="afv3k-bvd"/><path class="td5s74bhk"/><path class="glvsztbeh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:basketball-duo"} {...others} />);
}

export default Component;
