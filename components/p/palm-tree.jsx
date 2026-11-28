import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/g8zpdzj3s.css';
import '../../css/v/v6u0fpboh.css';
import '../../css/n/n6s3pbeow.css';
import '../../css/e/e5k-qbb7n.css';
import '../../css/v/v-qjopl6i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="g8zpdzj3s"/><path class="v6u0fpboh"/><path class="n6s3pbeow"/><path class="e5k-qbb7n"/><path class="v-qjopl6i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:palm-tree"} {...others} />);
}

export default Component;
