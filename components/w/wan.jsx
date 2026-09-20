import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cm7t8jb2j.css';
import '../../css/a/agsh3e2_t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cm7t8jb2j"/><path class="agsh3e2_t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:wan"} {...others} />);
}

export default Component;
