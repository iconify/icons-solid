import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nvqgxcehq {
  fill: currentColor;
  d: path("M7 7V5h4V2h2v3h4v2zm0 15V11q0-1.25.875-2.125T10 8h4q1.25 0 2.125.875T17 11v11zm2-2h6v-9q0-.425-.288-.712T14 10h-4q-.425 0-.712.288T9 11v1h3v2H9v2h3v2H9zm0 0V10z");
}
</style><path class="nvqgxcehq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:pediatrics-outline-sharp"} {...others} />);
}

export default Component;
