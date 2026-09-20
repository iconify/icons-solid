import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cjbugb6if.css';
import '../../css/b/bnu8qk5ih.css';
import '../../css/m/m9byb9ete.css';
import '../../css/m/mmx6ymgpo.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="cjbugb6if"/><path class="bnu8qk5ih"/><path class="m9byb9ete"/><path class="mmx6ymgpo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:signal"} {...others} />);
}

export default Component;
