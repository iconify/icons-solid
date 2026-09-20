import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cr1bpmbky {
  fill: currentColor;
  d: path("m8.904 21l-.865-9.423l.109-.058q.373-.26.6-.656t.227-.857q0-.417-.177-.79t-.492-.627l-.133-.07L8.789 6H12V4.539h-1.5v-1h4v1H13V6h3.212l.59 2.47l-.133.068q-.315.254-.492.628q-.177.373-.177.79q0 .461.217.86q.218.4.59.659l.11.052l-.82 9.473z");
}
</style><path class="cr1bpmbky"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:water-bottle-sharp"} {...others} />);
}

export default Component;
