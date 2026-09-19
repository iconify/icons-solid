import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u0dso5b6p.css';
import '../../css/d/dbkvu0bho.css';
import '../../css/b/btjdeyb9a.css';
import '../../css/q/qu9agstgr.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="u0dso5b6p"/><path class="dbkvu0bho"/><path class="btjdeyb9a"/><path class="qu9agstgr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:linkedin-wordmark"} {...others} />);
}

export default Component;
