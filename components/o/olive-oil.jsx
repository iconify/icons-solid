import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hehjgvcii.css';
import '../../css/d/d38vmcg6l.css';
import '../../css/s/sn-51ibzv.css';
import '../../css/b/bkx5zc1sa.css';
import '../../css/r/r208_2b8m.css';
import '../../css/a/ak-vafb5s.css';
import '../../css/r/rmx1nb9mq.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="hehjgvcii"/><path class="d38vmcg6l"/><path class="sn-51ibzv"/><path class="bkx5zc1sa"/><path class="r208_2b8m"/><path class="ak-vafb5s"/><path class="rmx1nb9mq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconito:olive-oil"} {...others} />);
}

export default Component;
