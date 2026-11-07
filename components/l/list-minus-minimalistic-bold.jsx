import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b6-nrrb9w.css';
import '../../css/l/lydkuv2ht.css';
import '../../css/e/ewevmsv6i.css';
import '../../css/o/owgp34bwe.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b6-nrrb9w"/><path class="lydkuv2ht"/><path class="ewevmsv6i"/><path class="owgp34bwe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:list-minus-minimalistic-bold"} {...others} />);
}

export default Component;
